import { Dialog, Transition } from "@headlessui/react";
import { Field, Form } from "react-final-form";
import { Fragment } from "react";
import { Cryptocurrency } from "../../../../services/cryptocurrency/type";
import TextInput from "../../../../components/Form/TextInput";
import { validate } from "../../../../core/form/validator";
import useAddPortfolioViewModel from "./addPortfolioViewModel";
import { PostAddToPortfolioBody } from "../../../../services/portfolio/types";

type AddToPortfolioModalProps = {
  isOpen: boolean;
  setIsOpen: (param: boolean) => void;
  crypto: Cryptocurrency;
};

const parse = (value: string) =>
  isNaN(parseFloat(value)) ? 0 : parseFloat(value);

const AddToPortfolioModal = ({
  isOpen,
  crypto,
  setIsOpen = () => {},
}: AddToPortfolioModalProps) => {
  const { submitForm } = useAddPortfolioViewModel();

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-UI-WHITE p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 text-center"
                  >
                    <div className="flex flex-row space-x-2 px-4 w-fit mx-auto text-UI-BLACK">
                      <img
                        src={crypto.logo}
                        alt={`${crypto.name} logo`}
                        className="bg-white rounded-full w-[40px] h-[40px]"
                      />
                      <div className="my-auto">{crypto.name}</div>
                    </div>
                  </Dialog.Title>
                  <div className="mt-2">
                    <Form<PostAddToPortfolioBody>
                      onSubmit={(values: PostAddToPortfolioBody) => {
                        submitForm(values);
                        closeModal();
                      }}
                      initialValues={{
                        crypto_id: crypto.crypto_id,
                        price: Number(crypto.price.toFixed(2)),
                      }}
                      render={({
                        handleSubmit,
                        submitting,
                        pristine,
                        invalid,
                      }) => (
                        <form
                          onSubmit={handleSubmit}
                          className="flex flex-col justify-center"
                        >
                          <div className="w-[350px] mx-auto flex flex-col">
                            <div className="hidden">
                              <Field
                                name="crypto_id"
                                component={TextInput}
                                validate={validate.positiveNumber}
                                type="number"
                                disabled
                                inputClassName="placeholder-UI-DARK-PURPLE bg-UI-SLATE focus:border-0 border border-UI-BORDER px-6 h-12 rounded-3xl w-full text-UI-WHITE"
                              />
                            </div>
                            <div className="mt-3 text-center">
                              <Field
                                name="amount"
                                component={TextInput}
                                type="number"
                                placeholder="Amount"
                                validate={validate.positiveNumber}
                                parse={parse}
                                inputClassName="placeholder-UI-DARK-PURPLE bg-UI-SLATE focus:border-0 border border-UI-BORDER px-6 h-12 rounded-3xl w-full text-UI-WHITE"
                              />
                            </div>
                            <div className="mt-3 text-center">
                              <Field
                                name="price"
                                component={TextInput}
                                placeholder="Price"
                                type="number"
                                validate={validate.positiveNumber}
                                parse={parse}
                                inputClassName="placeholder-UI-DARK-PURPLE bg-UI-SLATE focus:border-0 border border-UI-BORDER px-6 h-12 rounded-3xl w-full text-UI-WHITE"
                              />
                            </div>
                            <button
                              type="submit"
                              className="rounded-3xl w-full mt-8 bg-UI-BLUE h-12 text-UI-WHITE disabled:bg-slate-700 disabled:cursor-not-allowed disabled:text-slate-950"
                              disabled={submitting || pristine || invalid}
                            >
                              Add
                            </button>
                          </div>
                        </form>
                      )}
                    />
                  </div>

                  {/* <div className="mt-4 flex flex-row justify-center space-x-10">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                      Add
                    </button>

                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent  bg-pink-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-pink-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      CANCEL
                    </button>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AddToPortfolioModal;
