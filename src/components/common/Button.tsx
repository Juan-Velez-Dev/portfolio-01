export default function Button() {
  return (
    <div className="flex items-center justify-center bg-yellow-app w-32 h-9 rounded-lg m-auto hover:scale-110 transition-all active:scale-125">
      <a
        className="text-bg-app text-lg font-semibold"
        href="https://calendly.com/juanvelez-dev/interviews"
        target="_blank"
      >{`Contacto`}</a>
    </div>
  );
}
