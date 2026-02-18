import Image from "next/image";

type CardTileExampleProps = {
  groups: string[][];
};

export default function CardTileExample({ groups }: CardTileExampleProps) {
  return (
    <div className="mt-3 flex flex-wrap items-center justify-center gap-x-1.5 gap-y-2">
      {groups.map((group, i) => (
        <span key={i} className="inline-flex items-center">
          <span className="flex items-center gap-0.5">
            {group.map((tileId, j) => (
              <Image
                key={j}
                src={`/images/${tileId}.png`}
                alt=""
                width={28}
                height={40}
                className="h-7 w-auto object-contain"
              />
            ))}
          </span>
          {i < groups.length - 1 && (
            <span className="ml-1 text-xs font-semibold text-amber-600">+</span>
          )}
        </span>
      ))}
    </div>
  );
}
