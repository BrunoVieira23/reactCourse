import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PersonInfo from "./PersonInfo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PersonInfo name="john" hairColor="black">
        {" "}
      </PersonInfo>
      <div>
        <card>
          <h1>The Dark Knight</h1>
          <h2> Batman</h2>
          <p>
            Batman[a] is a superhero appearing in American comic books published
            by DC Comics. The character was created by artist Bob Kane and
            writer Bill Finger, and debuted in the 27th issue of the comic book
            Detective Comics on March 30, 1939. In the DC Universe continuity,
            Batman is the alias of Bruce Wayne, a wealthy American playboy,
            philanthropist, and industrialist who resides in Gotham City.
            Batman's origin story features him swearing vengeance against
            criminals after witnessing the murder of his parents Thomas and
            Martha as a child, a vendetta tempered with the ideal of justice. He
            trains himself physically and intellectually, crafts a bat-inspired
            persona, and monitors the Gotham streets at night. Kane, Finger, and
            other creators accompanied Batman with supporting characters,
            including his sidekicks Robin and Batgirl; allies Alfred Pennyworth,
            James Gordon, and Catwoman; and foes such as the Penguin, the
            Riddler, Two-Face, and his archenemy, the Joker. Kane conceived
            Batman in early 1939 to capitalize on the popularity of DC's
            Superman; although Kane frequently claimed sole creation credit,
            Finger substantially developed the concept from a generic superhero
            into something more bat-like. The character received his own
            spin-off publication, Batman, in 1940. Batman was originally
            introduced as a ruthless vigilante who frequently killed or maimed
            criminals, but evolved into a character with a stringent moral code
            and strong sense of justice. Unlike most superheroes, Batman does
            not possess any superpowers, instead relying on his intellect,
            fighting skills, and wealth. The 1960s Batman television series used
            a camp aesthetic, which continued to be associated with the
            character for years after the show ended. Various creators worked to
            return the character to his darker roots in the 1970s and 1980s,
            culminating with the 1986 miniseries The Dark Knight Returns by
            Frank Miller. DC has featured Batman in many comic books, including
            comics published under its imprints such as Vertigo and Black Label.
            The longest-running Batman comic, Detective Comics, is the
            longest-running comic book in the United States. Batman is
            frequently depicted alongside other DC superheroes, such as Superman
            and Wonder Woman, as a member of organizations such as the Justice
            League and the Outsiders. In addition to Bruce Wayne, other
            characters have taken on the Batman persona on different occasions,
            such as Jean-Paul Valley / Azrael in the 1993–1994 "Knightfall"
            story arc; Dick Grayson, the first Robin, from 2009 to 2011; and
            Jace Fox, son of Wayne's ally Lucius, as of 2021.[4] DC has also
            published comics featuring alternate versions of Batman, including
            the incarnation seen in The Dark Knight Returns and its successors,
            the incarnation from the Flashpoint (2011) event, and numerous
            interpretations from Elseworlds stories. One of the most iconic
            characters in popular culture, Batman has been listed among the
            greatest comic book superheroes and fictional characters ever
            created. He is one of the most commercially successful superheroes,
            and his likeness has been licensed and featured in various media and
            merchandise sold around the world; this includes toy lines such as
            Lego Batman and video games like the Batman: Arkham series. Batman
            has been adapted in live-action and animated incarnations, including
            the 1960s Batman television series played by Adam West and in film
            by Michael Keaton in Batman (1989), Batman Returns (1992), and The
            Flash (2023), Val Kilmer in Batman Forever (1995), George Clooney in
            Batman and Robin (1997), Christian Bale in The Dark Knight trilogy
            (2005–2012), Ben Affleck in the DC Extended Universe (2016–present),
            and Robert Pattinson in The Batman (2022). Kevin Conroy, Diedrich
            Bader, Jensen Ackles, Troy Baker, and Will Arnett, among others,
            have provided the character's voice.
          </p>
        </card>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
