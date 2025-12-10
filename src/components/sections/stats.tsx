const stats = [
    { value: '+50', label: 'Projetos Executados' },
    { value: '+200', label: 'Estratégias de Crescimento' },
    { value: '+100', label: 'Marcas Elevadas' },
];

const StatsSection = () => {
    return (
        <section className="py-20 sm:py-28 bg-card/50 border-y border-border/40">
            <div className="container">
                <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:gap-4">
                    {stats.map((stat) => (
                        <div key={stat.label} className="flex flex-col items-center">
                            <p className="font-headline text-5xl font-bold text-primary">{stat.value}</p>
                            <p className="mt-2 text-lg text-muted-foreground">{stat.label}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-16 text-center">
                    <p className="mx-auto max-w-3xl text-xl font-medium text-foreground/90">
                        <span className="text-primary">Tráfego</span> colocam o seu negócio à frente dos olhares certos. O seu <span className="text-primary">posicionamento</span> é a sua <span className="text-primary">vitrine digital!</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
