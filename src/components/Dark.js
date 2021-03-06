import { useState } from 'react'
import { Switch } from '@headlessui/react'

export default function Dark() {
  const [enabled, setEnabled] = useState(true)
  if (!enabled) {
    document.documentElement.classList.remove('dark')
  } else {
    document.documentElement.classList.add('dark')   
  }
  //console.log(localStorage.theme);
  let switchMode = () => {
    setEnabled(!enabled);
    if (!enabled) {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')   
    }
    
  }

  return (
    <div className="p-1 flex items-center">
      <Switch.Group>
        <Switch
          checked={enabled}
          onChange={switchMode}
          className={`${enabled ? 'bg-sky-900' : 'bg-sky-500'}
          relative inline-flex flex-shrink-0 h-[26px] w-[50px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={`${enabled ? 'translate-x-6' : 'translate-x-0'}
            pointer-events-none inline-block h-[22px] w-[22px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
          />
        </Switch>
      </Switch.Group>
    </div>
  )
}

