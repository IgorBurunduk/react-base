import { type RefObject, useEffect } from 'react';

type Event = MouseEvent | TouchEvent;
type RefOrArray<T> = RefObject<T> | RefObject<T>[] | undefined;

interface UseOutsideClickArgs<T extends HTMLElement = HTMLElement> {
  ref: RefObject<T>;
  handler: (event: Event) => void;
  exceptElementRef?: RefOrArray<T>;
  condition?: boolean;
}

export const useOutsideClick = <T extends HTMLElement = HTMLElement>({
  ref,
  handler,
  exceptElementRef,
  condition = true,
}: UseOutsideClickArgs<T>) => {
  useEffect(() => {
    if (!condition) {
      return;
    }

    const listener = (event: Event) => {
      const target = event.target as Node;

      const mainElement = ref?.current;
      if (!mainElement) {
        return;
      }

      const clickedInsideMain = mainElement.contains(target);

      const exceptElements = Array.isArray(exceptElementRef)
        ? exceptElementRef
        : exceptElementRef
          ? [exceptElementRef]
          : [];

      const clickedOnAnyExcept = exceptElements.some((exceptRef) =>
        exceptRef.current?.contains(target),
      );

      if (clickedInsideMain || clickedOnAnyExcept) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler, exceptElementRef, condition]);
};
