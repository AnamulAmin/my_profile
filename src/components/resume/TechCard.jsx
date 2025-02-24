import Image from "next/image"

function TechCard({technology}) {
    return (
        <div class="flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
            <div class="flex items-start">
                <div class="">
                    <Image
                        className="h-[50px] w-[50px] object-contain"
                        src={technology.logo}
                        alt=""
                        width="70"
                        height="70"
                    />
                </div>
                <div class="ml-4">
                    <h4 className="text-2xl font-bold">{technology.name}</h4>
                    <p class="text-base font-medium text-navy-700 dark:text-white">
                        {technology.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TechCard