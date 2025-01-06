import SettingsContent from "./SettingsContent";

export default function Settings() {
  return (
    <aside className="hidden custom-scrollbar overflow-y-auto 2xl:h-[calc(100vh-136px)] 2xl:block w-80 bg-white border-l rounded-xl">
      <SettingsContent />
    </aside>
  );
}
