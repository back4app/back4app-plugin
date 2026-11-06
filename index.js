// DeepSeek Harness plugin: registers the skills in ./skills on the harness skill registry.
import { readFileSync, readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { join } from 'node:path'

const SKILLS_DIR = fileURLToPath(new URL('./skills/', import.meta.url))
const PROVIDER = 'back4app'
const RANK = 600
const INVOCATION = { modelInvocable: true, userInvocable: true }

export const name = 'back4app'
export const inject = ['skills']

export function apply(ctx) {
  readSkills()
  ctx.skills.registerProvider(() => ({
    name: PROVIDER,
    async list(options) {
      options?.signal?.throwIfAborted()
      return readSkills().map(({ content, ...candidate }) => ({ ...candidate, rank: RANK, locator: candidate.path }))
    },
    async get(candidate, options) {
      options?.signal?.throwIfAborted()
      return readSkills().find((skill) => skill.name === candidate.name)
    },
  }))
}

function readSkills() {
  return readdirSync(SKILLS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => readSkill(join(SKILLS_DIR, entry.name)))
}

function readSkill(dir) {
  const path = join(dir, 'SKILL.md')
  const raw = readFileSync(path, 'utf8').replace(/\r\n/g, '\n')
  const match = /^---\n([\s\S]*?)\n---\n/.exec(raw)
  if (!match) throw new Error(`back4app: ${path} has no frontmatter`)
  const fields = {}
  for (const line of match[1].split('\n')) {
    const at = line.indexOf(': ')
    if (at > 0) fields[line.slice(0, at).trim()] = line.slice(at + 2).trim()
  }
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(fields.name ?? '') || !fields.description) {
    throw new Error(`back4app: ${path} needs a kebab-case name and a description`)
  }
  return {
    name: fields.name,
    description: fields.description,
    invocation: INVOCATION,
    provider: PROVIDER,
    source: 'bundled',
    resourceBase: { kind: 'directory', path: dir + '/' },
    path,
    content: raw.slice(match[0].length).trim(),
  }
}
