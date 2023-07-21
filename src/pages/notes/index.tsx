import { FC } from "react";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface NotesProps { }

const Notes: FC<NotesProps> = ({ }) => {
  const router = useRouter()

  return (
    <div className="container max-w-4xl min-h-screen flex items-center justify-center">
      <div className="flex flex-col w-max gap-4 h-full justify-center p-4">
        <div className="flex flex-row gap-3 w-max self-end">
          <Input
            readOnly
            onClick={() => router.push('/')}
            placeholder="Generate new notes"
          />
          <Button
            onClick={() => router.push('/')}
          >
            Generate
          </Button>
        </div>

        <div className="my-10">
          <h2 className="text-4xl">Linear Algebra</h2>

          <article>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut congue augue, in malesuada eros. Nam scelerisque, nisi ut viverra porta, urna enim varius turpis, sit amet vehicula mauris mi sed sem. Cras ullamcorper, erat at pulvinar euismod, nisi neque porta enim, vel fermentum augue elit vitae risus. Pellentesque commodo nibh eget lacus bibendum malesuada. Morbi at turpis neque. Mauris posuere faucibus nisi. Fusce scelerisque sem id lacus hendrerit, eu suscipit dui mollis. Sed non augue nunc. Nullam nunc ligula, maximus sit amet auctor ac, eleifend sed lorem. Integer eget elit id dui sollicitudin auctor. <br />

            Proin suscipit elementum diam, eu venenatis arcu condimentum id. Suspendisse eleifend dolor augue, sed maximus urna viverra a. Pellentesque bibendum in ante id maximus. Nam venenatis eros sit amet velit dictum, at fermentum ante iaculis. Ut consectetur odio vel velit tincidunt sagittis. Sed imperdiet risus ex, quis ullamcorper risus efficitur in. Vestibulum mauris felis, congue ac leo in, interdum pharetra neque. Nunc quis mauris mauris. Donec fermentum diam id commodo pulvinar. Mauris maximus gravida augue, id aliquam ipsum laoreet posuere. Sed a risus elementum, auctor odio nec, faucibus lorem. Mauris non turpis et sapien pharetra mattis in at nisi.<br />

            Nulla semper ex quis nisl aliquet rutrum. Nullam a quam id nulla sagittis lacinia. Donec convallis neque et interdum dignissim. Etiam vel imperdiet neque. Ut tempus quis turpis et iaculis. Quisque ultricies sollicitudin tempus. Nullam posuere augue in ultricies sodales. Mauris vitae iaculis urna, sit amet ornare ligula. Integer vitae purus non dui ornare aliquam eget eget leo.<br />

            Donec congue malesuada sapien, vitae finibus nibh molestie at. Curabitur quis varius orci, accumsan fringilla nibh. Vestibulum nec laoreet dolor. Sed eu nunc ut sapien eleifend feugiat sed et eros. Etiam ornare a erat in auctor. Etiam varius in arcu dignissim interdum. Proin tempor purus diam. Nam laoreet felis id augue finibus dictum.<br />

            Nam ullamcorper vehicula diam et rhoncus. Sed sodales ac lacus et venenatis. Donec vel est turpis. Etiam congue venenatis massa, eu posuere nibh cursus vel. Nullam at euismod diam. Quisque sit amet neque vitae nunc pulvinar vulputate. Etiam tempor feugiat mauris in tincidunt.
          </article>
        </div>

        <Button className="w-max self-end">Generate PDF</Button>
      </div>
    </div>
  )
}

export default Notes
