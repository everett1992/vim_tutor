Display a keyboard in the lower half of the screen, as commands are
explained their keys should be highlighted.

Key groups:
  - Verbs | actions      | change delete | c d
  - Nouns | text objects | word quotes   | w "

Vim is melodic. Commands are chained one after the other, each
modifying the action preformed by the command. Other editors are
chordal, complex commands require pressing many keys at once.

Exemplify the combinatorial nature of Vim commands.

Your goal isn't to cursor over to the end of the line,
and add a comma, go down a row and repeat four times.

You want to add commas to the end of the next nine lines.

In Vim you can do that in seven key strokes.

Ctrl-v, 9j, A:<esc>


You don't want to arrow over to the opening (, then press backspace
till you reach the closing ), and then enter your text.

You want to change the functions parameters.
In vim that can be done with ci)


             ci)
n function(a, b, c)
           ^^^^^^^


i function()
           ^


           d, e, f
i function(d, e, f)
                  ^

            <esc>
i function(d, e, f)
                  ^

            
n function(d, e, f)
                 ^
