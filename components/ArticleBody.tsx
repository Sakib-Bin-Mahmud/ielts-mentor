import type { ArticleBlock } from "@/lib/articles";

export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="mt-2">
      {blocks.map((block, i) => {
        if (block.type === "heading") {
          return (
            <h2
              key={i}
              className="mt-12 font-display text-2xl font-medium leading-snug text-ink sm:text-3xl"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "subheading") {
          return (
            <p key={i} className="mt-6 text-base font-semibold text-ink">
              {block.text}
            </p>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={i} className="mt-4 space-y-2.5">
              {block.items.map((item, j) => (
                <li key={j} className="flex gap-3 text-base leading-relaxed text-ink-soft/85">
                  <span aria-hidden className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-compass-gold" />
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p
            key={i}
            className={
              block.emphasis
                ? "mt-5 font-display text-xl italic leading-snug text-clarity-teal"
                : "mt-4 text-base leading-relaxed text-ink-soft/85"
            }
          >
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
