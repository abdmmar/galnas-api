import * as z from 'zod'

export const artistSchema = z.object(
  {
    name: z
      .string({ required_error: 'Artist name is required' })
      .min(1, { message: "Artist name can't be empty" }),
    link: z.string().optional(),
  },
  { required_error: 'Artist is required' },
)

export type ArtistSchema = z.infer<typeof artistSchema>

export const createCollectionSchema = z.object({
  title: z
    .string({ required_error: 'Title is required' })
    .min(1, { message: "Title can't be empty" }),
  description: z
    .string({ required_error: 'Description is required' })
    .min(1, { message: "Description can't be empty" }),
  classification: z
    .string({ required_error: 'Classification is required' })
    .min(1, { message: "Classification can't be empty" }),
  year: z
    .string({ required_error: 'Year is required' })
    .min(1, { message: "Year can't be empty" }),
  medium: z.array(
    z.string({ required_error: 'Medium is required' })
  ).min(1, { message: "Medium can't be empty" }),
  artist: z.array(artistSchema),
  image: z.string().optional(),
  link: z.string().optional(),
  size: z.string().optional(),
})