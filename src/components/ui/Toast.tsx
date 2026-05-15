import { Toast } from "@base-ui/react/toast";

export const toastManager = Toast.createToastManager();

const CopiedIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

function ToastList() {
  const { toasts } = Toast.useToastManager();
  return (
    <>
      {toasts.map((toast) => (
        <Toast.Root key={toast.id} toast={toast} className="lp-toast-root">
          <CopiedIcon />
          <Toast.Title>{toast.title}</Toast.Title>
        </Toast.Root>
      ))}
    </>
  );
}

export function LandingToastProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Toast.Provider toastManager={toastManager} timeout={2200}>
      {children}
      <Toast.Viewport className="lp-toast-viewport">
        <ToastList />
      </Toast.Viewport>
    </Toast.Provider>
  );
}
