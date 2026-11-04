import type { Publication } from '@/types/publication';

export const startPublications: Publication[] = [
    {
        id: 1,
        title: 'Wprowadzenie do TypeScript',
        author: 'Jan Kowalski',
        year: 2026,
        category: 'artykuł',
        favorite: true
    },
    {
        id: 2,
        title: 'Zaawansowane techniki programowania',
        author: 'Anna Nowak',
        year: 2025,
        category: 'książka'
    },
    {
        id: 3,
        title: 'Raport z badań nad sztuczną inteligencją',
        author: 'Piotr Wiśniewski',
        year: 2024,
        category: 'raport'
    },
    {
        id: 4,
        title: 'Metody numeryczne w fizyce',
        author: 'Maria Lewandowska',
        year: 2023,
        category: 'książka',
        favorite: true
    },
    {
        id: 5,
        title: 'Analiza danych w Pythonie',
        author: 'Krzysztof Zielinski',
        year: 2022,
        category: 'artykuł'
    }
];