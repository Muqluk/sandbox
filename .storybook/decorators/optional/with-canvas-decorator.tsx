// .storybook/decorators/optional/with-canvas-decorator.tsx
import React from 'react';

const defaultStyle = {
  canvas: {
    display: 'flex',
    flex: '0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5px',
    backgroundImage:
      'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAAAAACo4kLRAAAAH0lEQVQY02OcxQADZ+AsJgYsYKgIsiD8YTJInEShIAA1NwKQeKc4/QAAAABJRU5ErkJggg==)',
  },
  container: {
    padding: '50px 75px',
    minWidth: '0',
  },
  wrapper: {},
};

type Props = {
  canvas: Partial<typeof defaultStyle.canvas>,
  container: Partial<typeof defaultStyle.container>,
  wrapper: Partial<typeof defaultStyle.wrapper>,
  children: React.ReactNode
};

export const WithCanvasDecorator = (props: Props) => {
  const { children, canvas, container, wrapper } = props;
  const css = {
    canvas: {
      ...defaultStyle.canvas,
      ...canvas,
    },
    container: {
      ...defaultStyle.container,
      ...container,
    },
    wrapper,
  };
  return (
    <div style={css.canvas}>
      <div style={css.container}>
        <div style={css.wrapper}>{children}</div>
      </div>
    </div>
  );
};

WithCanvasDecorator.defaultProps = {
  canvas: {},
  container: {},
  wrapper: {},
};
