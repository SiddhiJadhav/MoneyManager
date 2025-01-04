import { useForm } from 'react-hook-form';
import { useAddFinanceData } from './../features/financeData/useAddFinanceData';
import { useContext, useEffect, useState } from 'react';
import { FinanceContext } from '../pages/Dashboard';
import { useEditFinanceData } from '../features/financeData/useEditFinanceData';
import supabase from '../services/supabase';
import FormLayout from './FormLayout';
import Input from './Input';
import Button from './Button';

export default function Form() {
  const { formType, isEditForm, editFormData, setShowForm } =
    useContext(FinanceContext);
  //const { user, isloading } = useContext(AuthContext);
  const { isAdding, addFianance } = useAddFinanceData();
  const { isEditing, editFianance } = useEditFinanceData();

  const [user, setUser] = useState({});

  useEffect(() => {
    async function setData() {
      const { data: session } = await supabase.auth.getSession();
      if (!session?.session?.user) return null;
      setUser(session?.session?.user);
    }
    setData();
  }, []);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditForm ? editFormData : {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    if (isEditForm) {
      editFianance(
        {
          data: {
            ...data,
            created_at: new Date(data.created_at),
            isIncome: formType === 'Income' ? true : false,
          },
        },
        {
          onSuccess: response => {
            console.log(response);

            reset();
            setShowForm(false);
          },
        }
      );
    } else {
      addFianance(
        {
          data: {
            ...data,
            created_at: new Date(data.created_at),
            isIncome: formType === 'Income' ? true : false,
            user: user.id,
          },
        },
        {
          onSuccess: response => {
            console.log(response);

            reset();
            setShowForm(false);
          },
        }
      );
    }
  }

  function onError(errors) {
    // console.log(errors);
  }

  let btnText = '';
  if (isEditForm) {
    btnText = formType === 'Income' ? 'Update Income' : 'Update Expense';
  } else {
    btnText = formType === 'Income' ? 'Add Income' : 'Add Expense';
  }

  function handleCloseModal(e) {
    if (e.target.id == 'modal') setShowForm(false);
  }

  return (
    <div
      className="z-50 bg-slate-500/50 tran fixed w-full h-full top-0 left-0"
      id="modal"
      onClick={e => handleCloseModal(e)}
    >
      <div className="bg-slate-200 w-1/3 py-10  gap-5 flex flex-col items-center m-auto my-16 rounded-xl">
        <div className="text-4xl font-bold text-slate-700">
          {formType == 'Income' ? 'INCOME' : 'EXPENCE'}
        </div>
        <FormLayout
          onSubmit={handleSubmit(onSubmit, onError)}
          classes="flex flex-col gap-3 w-2/3"
        >
          <Input
            id="created_at"
            label="Date"
            type="Date"
            isLoading={isAdding}
            errors={errors.created_at}
            register={register}
          />

          <Input
            id="account"
            label="Account"
            type="select"
            isLoading={isAdding}
            errors={errors.account}
            register={register}
            options={['Cash', 'Account', 'Card']}
          />

          <Input
            id="amount"
            label="Amount"
            type="text"
            isLoading={isAdding}
            errors={errors.amount}
            register={register}
          />

          <Input
            id="category"
            label="Category"
            type="select"
            isLoading={isAdding}
            errors={errors.category}
            register={register}
            options={
              formType == 'Income'
                ? ['Allowance', 'Salary', 'Bonus', 'Other']
                : [
                    'Food',
                    'Social Life',
                    'Transportation',
                    'Household',
                    'Health',
                    'Apparel',
                    'Culture',
                    'Gift',
                  ]
            }
          />

          <Input
            id="description"
            label="Description"
            type="text"
            isLoading={isAdding}
            errors={errors.description}
            register={register}
          />
          <Button text={btnText} isLoading={isAdding} />
        </FormLayout>
        {/* </form> */}
      </div>
    </div>
  );
}
