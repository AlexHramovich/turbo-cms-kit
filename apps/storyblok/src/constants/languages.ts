// Mirrors the `languages` setting of the Storyblok space. A code missing here is
// treated as part of the story path, so adding a language in Storyblok without
// adding it here leaves that language's preview URLs returning 404.
export const SB_LANGUAGES: readonly string[] = ["fr"];

// Storyblok builds preview URLs as {domain}/{language}/{slug}, but the space uses
// field-level translation, so the story slug is the same in every language and the
// language has to travel as a query parameter instead. Only codes in SB_LANGUAGES
// are split off: the space also has folders whose names look like language codes.
export function splitLanguageFromSlug(slug?: string[]): {
  language?: string;
  slug?: string[];
} {
  const [first, ...rest] = slug ?? [];

  if (!first || !SB_LANGUAGES.includes(first)) {
    return { slug };
  }

  // `rest` must collapse to undefined when empty. An empty array is truthy, so
  // fetchStory's `slug ? slug.join("/") : "home"` default would build `/stories/`
  // — the list endpoint — and no single story would come back.
  return { language: first, slug: rest.length > 0 ? rest : undefined };
}
