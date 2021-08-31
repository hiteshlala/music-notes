%{
  Sail Away Ladies
  Transcribed from:
    https://www.youtube.com/watch?v=6WBz_aY54r4
    Frankie Rodgers version
  with significant help from Lila Sklar
%}

\version "2.20.0"

\header{
  title = "Sail Away Ladies"
  composer = "Tommy Jarrel"
  tagline = "Transcribed by Lila Sklar & Hitesh Lala"
}


\score {
  \relative c'' {
    {
      \time 4/4
      \clef treble
      \key e \minor
      \repeat volta 2 {
        \bar ".|:"
        <<{\voiceOne e2} \new Voice {\voiceTwo e2}>> g2
        e4. d8 b[ d] e4 (
        e8) d e d b4 g
        a8 b a g e4 <e b'>4
      }
      \alternative {
        { e8 [g] d [g] e4 <e b'>4 | }
        { e8 [g] d [g] e [d] e [d] | }
      }
    } 
  }
  \header {
    piece = "Part A"
  }
}


\score {
  \relative c'' {
    {
      \time 4/4
      \clef treble
      \key e \minor
      \repeat volta 2 {
        \bar ".|:"
        e,8 [g] <d a'> [g] e [d] e [d]
        e8 [g] <d a'> [g] e [d] <b' e,>4
      }
      \alternative {
        { 
          <b e,>8 [g] e4 <d a'> <d a'> |
          e8 [g] <d a'> [g] e [d] e [d] | 
        }
        { 
          <b' e,>8 [g] e4 <d a'> <d a'> | 
        }
      }
    } 
  }
  \header {
    piece = "Part B"
  }
}
