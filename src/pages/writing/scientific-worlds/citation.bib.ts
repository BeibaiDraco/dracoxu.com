import bibtex from '../../../data/scientific-worlds/citation.bib?raw';

export const GET = () => new Response(bibtex, {
  headers: { 'Content-Type': 'application/x-bibtex; charset=utf-8' },
});
