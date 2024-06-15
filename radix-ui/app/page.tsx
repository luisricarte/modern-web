import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription as Description, DialogFooter as Footer, DialogHeader as Header, DialogTitle as Title, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {

  async function onSubmit(formData: FormData) {
    "use server";

    const name = formData.get('name');
    const email = formData.get('email');
    
  }

  return (
    <main className="w-full">
      <Card className="max-w-3xl m-auto mt-12">
        <CardHeader>
          <CardTitle className="flex">
            <span className="flex-1">Bem vindo ao Sistema, Usuário</span>
            <Dialog>
              <DialogTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://github.com/luisricarte.png" />
                  <AvatarFallback>Luis Ricarte</AvatarFallback>
                </Avatar>

              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <Header>
                  <Title>Edit profile</Title>
                  <Description>Make changes to your profile here. Click save when youre done.</Description>
                </Header>
                <form action={onSubmit}>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right"> Name </Label>
                      <Input required id="name" className="col-span-3"/>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="email" className="text-right"> Email </Label>
                      <Input required name="email" id="email" className="col-span-3" />
                    </div>
                  </div>
                  <Footer><Button type="submit"> Save changes </Button></Footer>
                </form>
              </DialogContent>
            </Dialog>
          </CardTitle>
          <CardDescription>Clique na foto para editar os detalhes do seu usuário</CardDescription>
        </CardHeader>
        <CardContent>
        </CardContent>
        <CardFooter>
        </CardFooter>
      </Card>

    </main>
  );
}