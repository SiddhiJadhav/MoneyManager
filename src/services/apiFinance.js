import supabase from './supabase';

export async function getfinance() {
  const { data: session } = await supabase.auth.getSession();
  console.log(session);
  if (!session?.session?.user) return null;

  const { data, error } = await supabase
    .from('financeData')
    .select('*')
    .eq('user', session?.session?.user?.id);
  if (error) {
    console.error(error);
    throw new Error('Data not found');
  }

  console.log(data);
  return data;
}

export async function addFinance(newEntry) {
  const { data, error } = await supabase
    .from('financeData')
    .insert([newEntry.data])
    .select();

  if (error) {
    console.error(error);
    throw new Error('Data not found');
  }

  return data;
}

export async function editFinance(editEntry) {
  const { data, error } = await supabase
    .from('financeData')
    .update([editEntry.data])
    .eq('id', editEntry.data.id)
    .select();

  if (error) {
    console.error(error);
    throw new Error('Data not found');
  }
  return data;
}
export async function deleteFinance(id) {
  const { error } = await supabase.from('financeData').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Data not found');
  }
}
