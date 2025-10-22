const AnnouncementBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-logo-green text-primary-foreground py-3 px-4 text-center overflow-hidden z-50 shadow-lg">
      <p className="text-sm md:text-base font-bold tracking-wider animate-pulse">
        LOGÍSTICA PARA EMPRESAS QUE <span className="text-accent font-extrabold">NÃO PODEM PARAR.</span>
      </p>
    </div>
  );
};

export default AnnouncementBar;
