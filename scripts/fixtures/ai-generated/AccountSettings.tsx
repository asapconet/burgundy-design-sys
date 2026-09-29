export function AccountSettings() {
  return (
    <section className="rounded-[10px] bg-[#ffffff] p-[13px]">
      <h2 className="text-[#1c1c1a]">Account settings</h2>

      <button
        className="rounded-[7px] bg-[#800020] px-[13px] py-[11px] text-white"
      >
        Save changes
      </button>

      <div
        className="cursor-pointer"
        onClick={() => undefined}
      >
        Advanced settings
      </div>
    </section>
  );
}
