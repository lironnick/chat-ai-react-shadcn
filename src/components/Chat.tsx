'use client';

import { useChat } from 'ai/react';

import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from './ui/scroll-area';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } =
    useChat({ api: '/api/chat' });

  return (
    <Card className="w-[440px]">
      {/* <Card className="w-[440px] h-[700px] grid grid-rows-[min-content_1fr_min-content]"> */}
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>Using Vercel SDK</CardDescription>
      </CardHeader>
      <CardContent className="">
        <ScrollArea className="h-[600px] w-full pr-4">
          {messages.map((message) => {
            return (
              <div
                key={message.id}
                className="flex gap-3 text-slate-600 text-sm mt-4"
              >
                {message.role === 'user' && (
                  <Avatar>
                    <AvatarFallback>TH</AvatarFallback>
                    <AvatarImage src="https://github.com/lironnick.png" />
                  </Avatar>
                )}

                {message.role === 'assistant' && (
                  <Avatar>
                    <AvatarFallback>BT</AvatarFallback>
                    <AvatarImage src="https://github.com/lironnick.png" />
                  </Avatar>
                )}

                <p className="leading-relaxed">
                  <span className="block font-bold text-slate-700">
                    {message.role === 'user' ? 'Usuário' : 'AI'}
                  </span>
                  {message.content}
                </p>
              </div>
            );
          })}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form className="w-full flex gap-2" onSubmit={handleSubmit}>
          <Input
            placeholder="Say something..."
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  );
}
