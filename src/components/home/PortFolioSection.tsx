import { PortfolioCard } from "@/components/cards/PorfolioScrollable";
import { ScrollableCardWrapper } from "@/components/ui/scrollable-wrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Building2, Calendar, Heart, Sparkles, Users } from "lucide-react";

const portfolioItems = [
  {
    icon: Heart,
    iconColor: "text-rose-400",
    gradient: "from-rose-500/20 to-red-600/20",
    tag: { text: "Corporate", bg: "bg-rose-500/20 text-rose-400" },
    title: "Shobha Event",
    description: "Shobha event management showcasing party decorations and entertainment.",
    date: "May 2024",
    location: "Coopera Venue",
    images: [
      "https://res.cloudinary.com/dvf6d5bam/image/upload/v1756786445/Shoba.........._event_eventmanagement_eventplanner_party_decorations_entertainment_copera_3_vlu9tw.jpg",
      "https://res.cloudinary.com/dvf6d5bam/image/upload/v1756786445/Shoba.........._event_eventmanagement_eventplanner_party_decorations_entertainment_copera_2_zcrjzy.jpg",
      "https://res.cloudinary.com/dvf6d5bam/image/upload/v1756786443/Shoba.........._event_eventmanagement_eventplanner_party_decorations_entertainment_copera_1_urciwx.jpg",
      "https://res.cloudinary.com/dvf6d5bam/image/upload/v1756786443/Shoba.........._event_eventmanagement_eventplanner_party_decorations_entertainment_copera_bp4ach.jpg",
      "https://res.cloudinary.com/dvf6d5bam/image/upload/v1756786443/Shoba.........._event_eventmanagement_eventplanner_party_decorations_entertainment_copera_5_zly5v0.jpg",
      "https://res.cloudinary.com/dvf6d5bam/image/upload/v1756786443/Shoba.........._event_eventmanagement_eventplanner_party_decorations_entertainment_copera_6_vjlelt.jpg",
      "https://res.cloudinary.com/dvf6d5bam/image/upload/v1756786443/Shoba.........._event_eventmanagement_eventplanner_party_decorations_entertainment_copera_7_hukys2.jpg",
    ],
  },
  {
    icon: Heart,
    iconColor: "text-pink-400",
    gradient: "from-pink-500/20 to-purple-600/20",
    tag: { text: "Wedding", bg: "bg-pink-500/20 text-pink-400" },
    title: "P R Wedding",
    description: "Grand affair of Prathima and Raj with elegant wedding celebrations.",
    date: "Sept 2024",
    location: "Botanical Gardens",
    images: [
      "https://res.cloudinary.com/dvf6d5bam/image/upload/v1756787825/A_grand_affair_-_P_R_wedding._Our_beautiful_couple_Prathima_and_Raj_living_in_the_US_wanted_to_g_2_flwicz.jpg",
      "https://res.cloudinary.com/dvf6d5bam/image/upload/v1756787826/A_grand_affair_-_P_R_wedding._Our_beautiful_couple_Prathima_and_Raj_living_in_the_US_wanted_to_g_1_kmosjn.jpg",
      "https://res.cloudinary.com/dvf6d5bam/image/upload/v1756787826/A_grand_affair_-_P_R_wedding._Our_beautiful_couple_Prathima_and_Raj_living_in_the_US_wanted_to_g_vsnpwz.jpg",
    ],
  },
  {
    icon: Building2,
    iconColor: "text-blue-400",
    gradient: "from-blue-500/20 to-purple-600/20",
    tag: { text: "Corporate", bg: "bg-blue-500/20 text-blue-400" },
    title: "Peter England CSK Event",
    description: "Corporate collaboration event with Chennai Super Kings by Peter England.",
    date: "Aug 2024",
    location: "Convention Center",
    images: [
      "https://res.cloudinary.com/dvf6d5bam/image/upload/v1756787698/PETER_ENGLAND.Chennai_Super_Kings......_event_eventmanagement_peterengland_chennaisuperkings_eqgc7f.jpg",
      "https://res.cloudinary.com/dvf6d5bam/image/upload/v1756787697/PETER_ENGLAND.Chennai_Super_Kings......_event_eventmanagement_peterengland_chennaisuperkings_1_kyrn4t.jpg",
      "https://res.cloudinary.com/dvf6d5bam/image/upload/v1756787696/PETER_ENGLAND.Chennai_Super_Kings......_event_eventmanagement_peterengland_chennaisuperkings_2_dudy4i.jpg",
      "https://res.cloudinary.com/dvf6d5bam/image/upload/v1756787695/PETER_ENGLAND.Chennai_Super_Kings......_event_eventmanagement_peterengland_chennaisuperkings_4_wxebsm.jpg",
    ],
  },
  {
    icon: Users,
    iconColor: "text-emerald-400",
    gradient: "from-emerald-500/20 to-blue-600/20",
    tag: { text: "Social", bg: "bg-emerald-500/20 text-emerald-400" },
    title: "Chivas Open House",
    description: "Social celebration with party decorations and entertainment by Chivas.",
    date: "July 2024",
    location: "Grand Ballroom",
    images: [
      "https://res.cloudinary.com/dvf6d5bam/image/upload/v1756787472/Chivas_Open_House........_event_eventmanagement_eventplanner_party_decorations_entertainmen_ggimwu.jpg",
      "https://res.cloudinary.com/dvf6d5bam/image/upload/v1756787471/Chivas_Open_House........_event_eventmanagement_eventplanner_party_decorations_entertainmen_2_ltdd1r.jpg",
      "https://res.cloudinary.com/dvf6d5bam/image/upload/v1756787471/Chivas_Open_House........_event_eventmanagement_eventplanner_party_decorations_entertainmen_5_xmvyxf.jpg",
      "https://res.cloudinary.com/dvf6d5bam/image/upload/v1756787470/Chivas_Open_House........_event_eventmanagement_eventplanner_party_decorations_entertainmen_3_supr86.jpg",
      "https://res.cloudinary.com/dvf6d5bam/image/upload/v1756787470/Chivas_Open_House........_event_eventmanagement_eventplanner_party_decorations_entertainmen_6_hhxsau.jpg",
    ],
  },
  {
    icon: Sparkles,
    iconColor: "text-amber-400",
    gradient: "from-amber-500/20 to-orange-600/20",
    tag: { text: "Corporate", bg: "bg-amber-500/20 text-amber-400" },
    title: "Google Corporate Party",
    description: "Google corporate event with elegant decorations and entertainment.",
    date: "Oct 2024",
    location: "Sky Lounge",
    images: [
      "https://res.cloudinary.com/dvf6d5bam/image/upload/v1756787602/GOOGLE......._event_eventmanagement_eventplanner_party_decorations_entertainment_coperatee_2_hwwph0.jpg",
      "https://res.cloudinary.com/dvf6d5bam/image/upload/v1756787602/GOOGLE......._event_eventmanagement_eventplanner_party_decorations_entertainment_coperatee_3_zzftvs.jpg",
      "https://res.cloudinary.com/dvf6d5bam/image/upload/v1756787603/GOOGLE......._event_eventmanagement_eventplanner_party_decorations_entertainment_coperatee_1_omfx17.jpg",
      "https://res.cloudinary.com/dvf6d5bam/image/upload/v1756787604/GOOGLE......._event_eventmanagement_eventplanner_party_decorations_entertainment_coperatee_ujembq.jpg",
      "https://res.cloudinary.com/dvf6d5bam/image/upload/v1756787601/GOOGLE......._event_eventmanagement_eventplanner_party_decorations_entertainment_coperatee_4_utwgok.jpg",
    ],
  },
  {
    icon: Calendar,
    iconColor: "text-purple-400",
    gradient: "from-purple-500/20 to-pink-600/20",
    tag: { text: "Corporate", bg: "bg-purple-500/20 text-purple-400" },
    title: "Jio Enterprise Meet",
    description: "Corporate meet by Jio with event management and interior design.",
    date: "Jun 2024",
    location: "Art Gallery",
    images: [
      "https://res.cloudinary.com/dvf6d5bam/image/upload/v1756787659/JIO_Enterprise_Meet......_event_eventmanagement_eventplanner_party_decorations_interiordesi_xa4kj2.jpg",
      "https://res.cloudinary.com/dvf6d5bam/image/upload/v1756787659/JIO_Enterprise_Meet......_event_eventmanagement_eventplanner_party_decorations_interiordesi_1_m9qv3o.jpg",
      "https://res.cloudinary.com/dvf6d5bam/image/upload/v1756787659/JIO_Enterprise_Meet......_event_eventmanagement_eventplanner_party_decorations_interiordesi_2_liqddj.jpg",
      "https://res.cloudinary.com/dvf6d5bam/image/upload/v1756787657/JIO_Enterprise_Meet......_event_eventmanagement_eventplanner_party_decorations_interiordesi_4_wbzve1.jpg",
    ],
  },
  {
    icon: Heart,
    iconColor: "text-rose-400",
    gradient: "from-rose-500/20 to-red-600/20",
    tag: { text: "Wedding", bg: "bg-rose-500/20 text-rose-400" },
    title: "Abhilash & Niteena Wedding",
    description: "Evening full of love and cheer celebrating Abhilash and Niteena’s wedding.",
    date: "May 2024",
    location: "Royal Venue",
    images: [
      "https://res.cloudinary.com/dvf6d5bam/image/upload/v1756787777/An_evening_full_of_love_and_cheer_celebrating_the_special_day_of_Abhilash_and_Niteena_at_the_Roy_1_duvjxk.jpg",
      "https://res.cloudinary.com/dvf6d5bam/image/upload/v1756787777/An_evening_full_of_love_and_cheer_celebrating_the_special_day_of_Abhilash_and_Niteena_at_the_Roy_2_nwedis.jpg",
      "",
    ],
  },
  {
    icon: Heart,
    iconColor: "text-rose-400",
    gradient: "from-rose-500/20 to-red-600/20",
    tag: { text: "Concert", bg: "bg-rose-500/20 text-rose-400" },
    title: "A.R. Rahman Live",
    description: "Music maestro A.R. Rahman mesmerizing the crowd with a live performance.",
    date: "May 2024",
    location: "Concert Stage",
    images: [
      "https://res.cloudinary.com/dvf6d5bam/image/upload/v1756787976/Music_Maestro_arrahman_on_the_stage_of_emaginationsinc_mesmerizing_the_crowd_music_musicfam_x1mpbx.jpg",
      "https://res.cloudinary.com/dvf6d5bam/image/upload/v1756787975/Music_Maestro_arrahman_on_the_stage_of_emaginationsinc_mesmerizing_the_crowd_music_musicfam_1_p4kfi1.jpg",
      "https://res.cloudinary.com/dvf6d5bam/image/upload/v1756787974/Music_Maestro_arrahman_on_the_stage_of_emaginationsinc_mesmerizing_the_crowd_music_musicfam_2_vbk7vh.jpg",
    ],
  },
] as const;


export default function PortfolioSection() {
  return (
    <section className="md:py-24 py-16 bg-gradient-to-b from-gray-900/50 to-black">
      <div className="container text-center mx-auto md:px-4 px-2">
        <SectionHeader
          badgeIcon={<Sparkles />}
          badgeText="Our Portfolio"
          title="Where dreams become"
          highlight="reality"
          description="Discover the magic we've created for our clients. Each event tells a unique story of innovation, creativity, and unforgettable experiences."
          buttonText="View Gallery"
        />

        {/* Portfolio Grid */}
        <ScrollableCardWrapper className="mt-5" >
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.title} {...item} />
          ))}
        </ScrollableCardWrapper>
      </div>
    </section>
  );
}
