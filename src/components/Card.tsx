export interface CardProps {
  inverted?: boolean;
  image: string;
  title: string;
  text: string;
}
export function Card({ inverted, image, title, text }: CardProps) {
  return (
    <article
      className={`${
        inverted ? "grid lg:flex" : "grid lg:grid"
      } lg:mx-auto lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-6 xl:gap-12 2xl:gap-24`}
    >
      <div
        className={`max-w-xl px-4 mx-auto space-y-6 sm:px-6 lg:py-32 lg:mx-auto lg:max-w-3xl xl:pl-12 2xl:pl-20 ${
          inverted
            ? "order-2 mb-12 sm:mb-16 lg:mb-0"
            : "order-1 mb-12 sm:mb-16 lg:mb-0"
        }`}
      >
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
            {title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-500 sm:text-xl">
            {text}
          </p>
        </div>
      </div>
      <div
        className={`lg:col-start-1 ${
          inverted ? "order-2" : "order-1 mb-12 sm:mb-16 lg:mb-0"
        }`}
      >
        <div className="lg:px-0 lg:m-0 lg:relative lg:h-full lg:flex lg:items-center pr-4 -sm:ml-48 sm:pr-6 md:-ml-16">
          <img
            className="w-full lg:right-0 rounded-r-xl"
            src={image}
            alt={title}
          />
        </div>
      </div>
    </article>
  );
}
