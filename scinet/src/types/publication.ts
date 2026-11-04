export type Category = 'artykuł' | 'książka' | 'raport'

export interface Publication {
  id: number
  title: string
  author: string
  year: number
  category: Category
  favorite?: boolean
}
