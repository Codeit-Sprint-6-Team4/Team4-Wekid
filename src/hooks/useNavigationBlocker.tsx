import { useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavigationBlockerProps {
  when: boolean;
  onConfirm: (callback: () => void) => void;
}

const useNavigationBlocker = ({ when, onConfirm }: NavigationBlockerProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBeforeUnload = useCallback(
    (event: BeforeUnloadEvent) => {
      if (when) {
        event.preventDefault();
      }
    },
    [when],
  );

  useEffect(() => {
    if (when) {
      window.addEventListener('beforeunload', handleBeforeUnload);
    } else {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    }

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [when, handleBeforeUnload]);

  useEffect(() => {
    const handlePopState = () => {
      if (when) {
        onConfirm(() => {
          navigate(location.pathname, { replace: true });
        });
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [when, onConfirm, navigate, location]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest('a');
      if (when && target && (target as HTMLAnchorElement).href) {
        event.preventDefault();
        const href = (target as HTMLAnchorElement).href;

        onConfirm(() => {
          window.location.href = href;
        });
      }
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [when, onConfirm]);
};

export default useNavigationBlocker;
