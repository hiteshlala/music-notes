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
  tagline = "Transcribed by Lila Sklar & Hitesh Lala"
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
      r2 d,4 \fermata
      \repeat volta 2 {
        g4. fis8 g[ b]
        a4 fis d
        g2.
        r2 d'4 \glissando
        e4. dis8 e [fis] 
        e4 d b
        d2.
        r2 d4 \glissando
        e4. dis8 e [fis]
        e4 d b8 [a] 
        \grace {a8} b4. a8 b [a]
        g [fis] e4 b8([c]) 
        e4 g \grace {a8} b4 
        a fis \glissando a
        g2. 
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
      \time 3/4
      \clef treble
      \key e \minor
      \repeat volta 2 {
        \bar ".|:"
        e4 \staccato b8 [b] b [b] 
        b4 a4 g8 b
        d4 b a 
        b2.
        a4 \staccato a8 [a] a [a] 
        \grace {a8} b4 a4 g 
        e d b8 [c] 
        <e b'>2.
      }
    } 
  }
  \header {
    piece = "Part B"
  }
}

