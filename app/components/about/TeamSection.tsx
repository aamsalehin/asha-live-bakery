import Image from "next/image";
import { TEAM } from "@/data/team";

export default function TeamSection() {
  return (

 <section className=" py-24" style={{ backgroundColor: 'rgba(217,83,79,0.07)' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-0">
       <h2 className="text-3xl font-bold mb-10 border-l-4 pl-4 border-[var(--primary)]">
        আমাদের টিম
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {TEAM.map((member) => (
          <div key={member.name} className="text-center">
            <div className="w-full h-56 rounded-xl overflow-hidden shadow-lg mb-4">
              <Image
                src={member.img}
                alt={member.name}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="opacity-80">{member.role}</p>
          </div>
        ))}
      </div>
      </div>
    </section>



    
  );
}
