import Image from 'next/image';

const Logo = () => {
  return (
    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
      <Image
        src="/logo.png"
        alt="Sekker Model Group"
        width={48}
        height={48}
        className="rounded-lg object-contain"
        priority
      />
    </div>
  );
};

export default Logo;
