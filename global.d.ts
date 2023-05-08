interface Window {
  __ENV: NodeJS.ProcessEnv;
}

declare namespace JSX {
  interface IntrinsicAttributes {
    'access-id'?: string;
  }

  interface ElementAttributesProperty {
    'access-id': any;
  }
}
