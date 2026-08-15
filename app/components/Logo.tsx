// // "use client" // Раскомментируй эту строку, если будешь использовать в Client Component

// import Link from 'next/link';
// import Image from 'next/image';

// export default function Logo() {
//   return (
//     // Ссылка, которая ведет на главную страницу
//     <Link href="/" className="relative flex items-center group">
      
//       {/* Это контейнер для картинки. Мы делаем его идеально круглым:
//         w-12 h-12 — задает размер круга (48px на 48px). Можно менять под свой навбар.
//         rounded-full — делает его круглым.
//         bg-black — заливает круг черным фоном.
//         border-2 border-white/80 — добавляет тонкую белую границу, чтобы логотип выделялся.
//         group-hover:border-white — при наведении на ссылку граница становится ярче.
//         overflow-hidden — гарантирует, что ничего не вылезет за пределы круга.
//       */}
//       <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black border-2 border-white/80 transition-colors duration-200 overflow-hidden group-hover:border-white">
        
//         {/* Сама картинка. Next.js её оптимизирует */}
//         <Image
//           src="/logo-kn.jpg" // Ссылка на картинку в папке public
//           alt="KN Logo"
//           width={36}  // Задаем размер картинки чуть меньше круга (48-12=36)
//           height={36}
//           className="relative transition-transform duration-200 group-hover:scale-105" // Эффект увеличения букв при наведении
//         />
        
//       </div>
      
//     </Link>
//   );
// }





import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="Komron Nazarov — Home"
      className="relative flex items-center group"
    >
      <div
        className="
          w-12 h-12
          flex items-center justify-center
          rounded-full
          bg-black
          border-2 border-white/80
          overflow-hidden
          transition-colors duration-200
          group-hover:border-white
        "
      >
        <Image
          src="/logo-kn.jpg"
          alt="KN Logo"
          width={36}
          height={36}
          loading="eager"
          className="
            relative
            w-9 h-9
            object-contain
            transition-transform duration-200
            group-hover:scale-105
          "
        />
      </div>
    </Link>
  );
}