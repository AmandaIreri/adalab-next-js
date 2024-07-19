import SectionAtom from "./Atoms/SectionAtom";

export default function Home() {
  return (
    <main>
      <h1 className="text-green-800 text-3xl	">Introduction to Next.Js</h1>
      <SectionAtom
      heading="About Us"
      content = {
        <div>
          <p>This is the about section</p>
        </div>
      }
      />
    </main>
  );
}
