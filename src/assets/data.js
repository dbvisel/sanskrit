const data = {
  vowels: {
    title: `Vowels (svara)`,
    titleSanskrit: `स्वर`,
    characters: [
      { length: "short", complexity: "simple", en: "a", sa: "अ" },
      { length: "short", complexity: "simple", en: "i", sa: "इ" },
      { length: "short", complexity: "simple", en: "u", sa: "उ" },
      { length: "short", complexity: "simple", en: "ṛ", sa: "ऋ" },
      {
        length: "short",
        complexity: "simple",
        en: "ḷ",
        sa: "ऌ",
        uncommon: true,
      },
      { length: "long", complexity: "simple", en: "ā", sa: "आ" },
      { length: "long", complexity: "simple", en: "ī", sa: "ई" },
      { length: "long", complexity: "simple", en: "ū", sa: "ऊ" },
      {
        length: "long",
        complexity: "simple",
        en: "ṝ",
        sa: "ॠ",
        uncommon: true,
      },
      { length: "short", complexity: "complex", en: "e", sa: "ए" },
      { length: "short", complexity: "complex", en: "o", sa: "ओ" },
      { length: "long", complexity: "complex", en: "ai", sa: "ऐ" },
      { length: "long", complexity: "complex", en: "au", sa: "औ" },
    ],
  },
  consonants: {
    title: `Consonants (vyañjana)`,
    titleSanskrit: `व्यञ्जन`,
    characters: [],
  },
  additionalCharacters: { title: `Additional Characters`, characters: [] },
  specialConjuncts: { title: `Special Conjuncts`, characters: [] },
};

export default data;
