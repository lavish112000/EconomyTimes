import React from 'react';

interface SchemaScriptProps {
  schema: string | string[];
}

export function SchemaScript({ schema }: SchemaScriptProps) {
  const schemas = Array.isArray(schema) ? schema : [schema];

  return React.createElement(
    React.Fragment,
    null,
    schemas.map((s, index) =>
      React.createElement('script', {
        key: index,
        type: 'application/ld+json',
        dangerouslySetInnerHTML: { __html: s },
      })
    )
  );
}
