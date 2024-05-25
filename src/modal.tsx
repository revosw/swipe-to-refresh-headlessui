"use client";
import {
	Dialog,
	DialogPanel,
	Transition,
	TransitionChild,
} from "@headlessui/react";

type Props = {
	open: boolean;
	setOpen: any;
};

// Need open=false because client state is always "undefined"
const Modal = ({ open = false, setOpen }: Props) => {
	return (
		<Transition show={open}>
			<Dialog
				as="div"
				style={{ zIndex: 1000 }}
				className="fixed inset-0"
				onClose={setOpen}
			>
				<TransitionChild
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-neutral-700/65 -z-10 backdrop-blur-md" />
				</TransitionChild>
				<TransitionChild
					enter="ease-out duration-300"
					enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
					enterTo="opacity-100 translate-y-0 sm:scale-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100 translate-y-0 sm:scale-100"
					leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
				>
					<div
						className="fixed inset-0 grid justify-center items-center"
						style={{ gridTemplateColumns: `minmax(auto-fit,500px)` }}
					>
						<DialogPanel
							className="grid place-content-center w-screen sm:max-w-[534px] h-[100dvh] sm:h-min sm:max-h-[80vh] overflow-y-auto overflow-x-hidden border border-neutral-200/20 bg-neutral-700/65 backdrop-blur-2.5xl sm:rounded-3xl p-4 sm:p-10"
                        >
                            <button onClick={() => setOpen(false)} className="rounded-2xl p-4 bg-indigo-500">Close</button>
						</DialogPanel>
					</div>
				</TransitionChild>
			</Dialog>
		</Transition>
	);
};

export default Modal;
