import Image from 'next/image';

export default function Medallion() {
  return (
    <div className="flex justify-center -mt-14 mb-6">
      <Image
        src="/medallion.png"
        alt="xlSigma medallion"
        width={112}
        height={112}
        priority
        className="h-24 w-24 md:h-28 md:w-28 drop-shadow-lg"
      />
    </div>
  );
}
