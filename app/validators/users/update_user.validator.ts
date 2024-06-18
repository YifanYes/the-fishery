import vine from '@vinejs/vine'

export const updateUserValidator = vine.compile(
  vine.object({
    title: vine.string().nullable(),
    details: vine.object({
      about_me: vine.string().nullable(),
      skills: vine.string().nullable(),
      interests: vine.string().nullable(),
      hobbies: vine.string().nullable(),
      future_world_view: vine.string().nullable(),
      desired_impact: vine.string().nullable(),
    }),
    social_media: vine.object({
      linkedin: vine.string().nullable(),
      instagram: vine.string().nullable(),
      x: vine.string().nullable(),
      github: vine.string().nullable(),
    }),
  })
)
