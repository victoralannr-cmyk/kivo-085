import AnimatedCounter from "@/components/ui/animated-counter";

const stats = [
    { value: 50, label: 'Projetos Executados', prefix: '+' },
    { value: 200, label: 'Estratégias de Crescimento', prefix: '+' },
    { value: 100, label: 'Marcas Elevadas', prefix: '+' },
];

const StatsSection = () => {
    return (
        <section className="py-20 sm:py-28">
            <div className="container">
                <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:gap-4">
                    {stats.map((stat) => (
                        <div key={stat.label} className="flex flex-col items-center">
                            <div className="font-headline text-5xl font-bold flex">
                                <span className="text-wavy-gradient">
                                    {stat.prefix}
                                    <AnimatedCounter to={stat.value} />
                                </span>
                            </div>
                            <p className="mt-2 text-lg text-muted-foreground">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
