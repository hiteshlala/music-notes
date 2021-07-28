%{
  Ookpik Waltz
  Transcribed from:
    https://www.youtube.com/watch?v=B2IwkS4xHIc
    Frankie Rodgers version
  with significant help from Lila Sklar
%}

\version "2.20.0"

\header{
  title = "Ookpik Waltz"
  composer ="Frankie Rodgers"
  copyright = "Transcribed by Lila Sklar & Hitesh Lala"
}

\score {
  \relative c'' {
    {
      \time 3/4
      \clef treble
      \key e \minor
      <<{\voiceOne e4.} \new Voice {\voiceTwo e4.}>> dis8 e[fis] 
      e4 d b8 a
      b4. a8 b[ c]
      g fis e4. d8
      e4 g \grace {a8} b4
      a fis d
      e2.
    }
  }
  \header {
    piece = "Intro"
  }
}

\score {
  \relative c'' {
    {
      \time 3/4
      \clef treble
      \key e \minor
      r2 d,4 
      g4. fis8 g[ b]
      a4 fis d
      g2.
      r2 d'4 \glissando
      e d8 [e] fis [e]
      d4 b d(
      d2) d4 \glissando
      e d8 [e] fis [e]
      

    } 
  }
  \header {
    piece = "Part A"
  }
}

