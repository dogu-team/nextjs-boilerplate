declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      DOGU_RUN_TYPE:
        | 'development'
        | 'production'
        | 'test'
        | 'local'
        | 'staging'
        | 'e2e';
      NEXT_PUBLIC_ENV:
        | 'development'
        | 'production'
        | 'test'
        | 'local'
        | 'staging'
        | 'e2e';
    }
  }
}

export {};
