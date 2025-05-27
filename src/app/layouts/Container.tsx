import type { PropsWithChildren } from 'react';

function Container({ children }: PropsWithChildren) {
  return (
    <div className="@container">
      <div className="2xl:px-72 xl:px-56 lg:px-32 md:px-16 px-4 lg:py-6 py-4">
        {children}
      </div>
    </div>
  );
}
export default Container;
