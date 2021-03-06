import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../images/bug.svg';
import ideaImageUrl from '../../images/idea.svg';
import thoughtImageUrl from '../../images/thought.svg';
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto',
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lampada',
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de um balão de pensamento',
    }
  },
}

export type FeetbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeetbackType | null>(null);
  const [feedbackSend, setFeedbackSend] = useState(false);

  function handleFeedbackRestart() {
    setFeedbackType(null);
    setFeedbackSend(false);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

      {feedbackSend ? <FeedbackSuccessStep onFeedbackRestartRequested={handleFeedbackRestart} /> : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) :
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleFeedbackRestart}
              onFeedbackSent={() => setFeedbackSend(true)}

            />
          }
        </>
      )}
      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela <a href="https://rocketseat.com.br" className="underline underline-offset-2">Rocketseat</a>
      </footer>
    </div>
  );
}