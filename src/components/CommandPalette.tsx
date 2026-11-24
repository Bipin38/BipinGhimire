import { Command } from 'cmdk';
import { useEffect, useState, useSyncExternalStore } from 'react';
import { toggleTheme } from '../lib/theme';

export interface PaletteItem {
  group: string;
  label: string;
  href?: string;
  action?: 'theme' | 'copy-email';
}

interface Props {
  items: PaletteItem[];
  email: string;
}

const noSubscribe = () => () => {};
const modKey = () => (/Mac|iPhone|iPad/.test(navigator.userAgent) ? '⌘' : 'Ctrl ');

export default function CommandPalette({ items, email }: Props) {
  const [open, setOpen] = useState(false);
  // Server HTML shows ⌘; the client swaps in Ctrl on non-Apple platforms after hydration.
  const mod = useSyncExternalStore(noSubscribe, modKey, () => '⌘');

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const run = (item: PaletteItem) => {
    setOpen(false);
    if (item.action === 'theme') toggleTheme();
    else if (item.action === 'copy-email') void navigator.clipboard.writeText(email);
    else if (item.href?.startsWith('http')) window.open(item.href, '_blank', 'noopener');
    else if (item.href) window.location.assign(item.href);
  };

  const groups = [...new Set(items.map((i) => i.group))];

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-keyshortcuts="Meta+K Control+K"
        className="border-line hover:border-text text-muted inline-flex h-9 items-center gap-2 border px-2.5 font-mono text-xs transition-colors"
      >
        <span className="hidden sm:inline">Jump to</span>
        <span className="sr-only sm:hidden">Open command menu</span>
        <kbd className="text-text" aria-hidden="true">
          {mod}K
        </kbd>
      </button>

      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Command menu"
        overlayClassName="fixed inset-0 z-50 bg-black/50 backdrop-blur-[2px]"
        contentClassName="fixed inset-x-4 top-[12vh] z-50 mx-auto max-w-xl border border-line bg-bg shadow-2xl"
      >
        <Command.Input
          placeholder="Type a section, project, or action…"
          className="border-line placeholder:text-muted w-full border-b bg-transparent px-4 py-3.5 text-base outline-none"
        />
        <Command.List className="max-h-[60vh] overflow-y-auto p-2">
          <Command.Empty className="text-muted px-3 py-6 text-center text-sm">No results.</Command.Empty>
          {groups.map((g) => (
            <Command.Group
              key={g}
              heading={g}
              className="[&_[cmdk-group-heading]]:text-muted mb-2 [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:uppercase"
            >
              {items
                .filter((i) => i.group === g)
                .map((i) => (
                  <Command.Item
                    key={`${g}-${i.label}`}
                    value={`${g} ${i.label}`}
                    onSelect={() => run(i)}
                    className="data-[selected=true]:bg-surface data-[selected=true]:text-accent flex cursor-pointer items-center justify-between px-3 py-2 text-sm"
                  >
                    {i.label}
                    {i.href?.startsWith('http') && <span className="text-muted">↗</span>}
                  </Command.Item>
                ))}
            </Command.Group>
          ))}
        </Command.List>
      </Command.Dialog>
    </>
  );
}
