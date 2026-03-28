import ProfileCard from './ProfileCard';

export default function HeroProfileAndPreview({ disablePreviewTilt }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
      {/* Profile Card */}
      <div className="flex-shrink-0">
        <ProfileCard 
          name="Benson Ricohermoso"
          title="Full-Stack Web Developer & AI Specialist"
          avatarUrl="/images/profile.jpg"
          enableTilt={!disablePreviewTilt}
        />
      </div>
      {/* Preview Cards (reuse from Hero) */}
      <div className="flex flex-col items-center">
        {/* Place the preview cards code here, or import as a component if reusable */}
      </div>
    </div>
  );
}
