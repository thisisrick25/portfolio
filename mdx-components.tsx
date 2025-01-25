import type { MDXComponents } from 'mdx/types'

import React, { ComponentPropsWithoutRef } from 'react';
import { Link } from 'next-view-transitions';
import { highlight } from 'sugar-high';

type HeadingProps = ComponentPropsWithoutRef<'h1'>;
type ParagraphProps = ComponentPropsWithoutRef<'p'>;
type ListProps = ComponentPropsWithoutRef<'ul'>;
type ListItemProps = ComponentPropsWithoutRef<'li'>;
type AnchorProps = ComponentPropsWithoutRef<'a'>;
type BlockquoteProps = ComponentPropsWithoutRef<'blockquote'>;


const defaultComponents = {
  h1: (props: HeadingProps) => (
    <h1 className="pt-12 mb-0 font-medium fade-in" {...props} />
  ),
  h2: (props: HeadingProps) => (
    <h2 className="mt-8 mb-3 font-medium text-gray-800" {...props} />
  ),
  h3: (props: HeadingProps) => (
    <h3 className="mt-8 mb-3 font-medium text-gray-800" {...props} />
  ),
  h4: (props: HeadingProps) => <h4 className="font-medium" {...props} />,
  p: (props: ParagraphProps) => (
    <p className="leading-snug text-gray-800" {...props} />
  ),
  ol: (props: ListProps) => (
    <ol className="pl-5 space-y-2 list-decimal text-gray-800" {...props} />
  ),
  ul: (props: ListProps) => (
    <ul className="pl-5 space-y-1 list-disc text-gray-800" {...props} />
  ),
  li: (props: ListItemProps) => <li className="pl-1" {...props} />,
  em: (props: ComponentPropsWithoutRef<'em'>) => (
    <em className="font-medium" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<'strong'>) => (
    <strong className="font-medium" {...props} />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className = 'text-blue-500 hover:text-blue-700';
    if (href?.startsWith('/')) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith('#')) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  },
  code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
    const codeHTML = highlight(children as string);
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
  },
  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <table>
      <thead>
        <tr>
          {data.headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="ml-[0.075em] border-l-3 border-gray-300 pl-4 text-gray-700"
      {...props}
    />
  ),
};

// declare global {
//   type MDXProvidedComponents = typeof defaultComponents;
// }

// export function useMDXComponents(): MDXProvidedComponents {
//   return components;
// }
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // ...defaultComponents,
    // ...components,
  }
}