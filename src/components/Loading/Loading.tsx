export default function Loading({isFull = false}: {isFull?: boolean}) {
  return (
    <div className={`flex justify-center items-center animate-fade-in ${isFull ? "h-screen" : "h-96"}`}>
      <div className="spinner"></div>
    </div>
  );
}
