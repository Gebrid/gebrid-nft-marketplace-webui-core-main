import { useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: React.ReactNode;
  selector: string;
}

export default function ReactPortal({
  children,
  selector = 'react-portal-wrapper',
}: Props) {
  const [wrapperElement, setWrapperElement] = useState<
    Element | DocumentFragment
  >(null!);

  useLayoutEffect(() => {
    let el = document.getElementById(selector);

    let created = false;

    if (!el) {
      created = true;
      el = createWrapperAndAppend(selector);
    }

    setWrapperElement(el);

    return () => {
      if (created && el?.parentNode) {
        el?.parentNode?.removeChild(el);
      }
    };
  }, [selector]);

  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
}

function createWrapperAndAppend(selector: string) {
  const wrapper = document.createElement('div');
  wrapper.setAttribute('id', selector);
  document.body.appendChild(wrapper);
  return wrapper;
}
