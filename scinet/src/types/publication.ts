// Tworzy typ kategorii:: wartos moze byc jedna z trzech kategorii
export type Category = 'artykuł' | 'książka' | 'raport';

// Tworzy interfejs, czyli opis pol ktore musi miec kaz`da aplikacja

export interface Publication { 
    id: number; // unikalny identyfikator publikacji
    title: string; // tytuł publikacji
    author: string; // autor publikacji
    year: number; // rok publikacji
    category: Category; // kategoria publikacji
    favorite?: boolean; // opcjonalne pole oznaczające, czy publikacja jest ulubiona   
}

